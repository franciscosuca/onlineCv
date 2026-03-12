import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

interface Experience {
    id: string;
    type: string;
    sdate: string;
    edate: string;
    company: string;
    location: string;
    title: string;
    summary: string;
    skills: string;
    link?: string;
}

const DATA_DIR = path.join(process.cwd(), 'app/data');
const BASE_URL = 'https://cv.by-francisco.com/';

async function fetchCVPage(subpath: string) {
    const url = `${BASE_URL}${subpath}`;
    console.log(`Fetching from ${url}...`);
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const items: Experience[] = [];
    
    $('.flex.flex-col.space-y-2.mb-4').each((i, el) => {
        const title = $(el).find('h1.text-xl.font-semibold, h2.text-xl.font-semibold').text().trim();
        if (!title) return;

        const detailsHtml = $(el).find('span.text-neutral-600').html() || '';
        const parts = detailsHtml.split(/<br\s*\/?>/i);
        
        let location = 'Unknown';
        let company = 'Unknown';
        let sdate = '';
        let edate = '';

        if (parts.length > 0) {
            const locCompRaw = parts[0].replace(/<!--.*?-->/g, '').trim();
            const lcParts = locCompRaw.split(',');
            if (lcParts.length >= 2) {
                location = lcParts[0].trim();
                company = lcParts[1].trim();
            } else {
                company = locCompRaw;
            }
        }

        if (parts.length > 1) {
            const datesRaw = parts[1].replace(/<!--.*?-->/g, '').trim();
            const dParts = datesRaw.split('-');
            if (dParts.length >= 2) {
                sdate = dParts[0].trim();
                edate = dParts[1].trim();
            } else {
                sdate = datesRaw;
            }
        }

        const summary = $(el).find('article.prose').text().trim();
        
        items.push({
            id: `${subpath}-${i}`,
            type: subpath,
            sdate: sdate,
            edate: edate,
            company,
            location,
            title,
            summary,
            skills: 'Various',
        });
    });

    return items;
}

async function fetchAllData() {
    try {
        if (!fs.existsSync(DATA_DIR)) {
            fs.mkdirSync(DATA_DIR, { recursive: true });
        }

        const sections = ['workExperience', 'projects', 'volunteering'];
        
        for (const section of sections) {
            const data = await fetchCVPage(section);
            if (data.length > 0) {
                const outputPath = path.join(DATA_DIR, `${section}.json`);
                fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
                console.log(`Successfully extracted ${data.length} item(s) for ${section}.`);
            } else {
                console.log(`No items found for ${section}, skipping file creation.`);
            }
        }
    } catch (error) {
        console.error('Failed to fetch CV data:', error);
    }
}

fetchAllData();
