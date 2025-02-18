import { getSkills } from "app/utils/utils";

export default function Page() {
    return (
        <section>
            <h1  className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>
            {/* TODO create a graph out of this data */}
            <p>Here is a list of my skills:</p>
            <ul>
                {getSkills().map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}