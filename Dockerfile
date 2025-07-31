# Use official Node.js LTS image
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the app source
COPY . .

# Build the Next.js app
RUN npm run build

# Production image
FROM node:20-alpine AS runner

# Install ca-certificates for SSL/TLS connections
RUN apk add --no-cache ca-certificates

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist/standalone ./
COPY --from=builder /app/dist/static ./dist/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/server.js ./

# Set NODE_ENV to production
ENV NODE_ENV=production

# Set the port that the app will listen on
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start the app using the standalone server
CMD ["node", "server.js"]