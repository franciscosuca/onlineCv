# Use official Node.js LTS image with multi-arch support
FROM --platform=$BUILDPLATFORM node:20-slim AS builder

# Build arguments for cross-compilation
ARG TARGETPLATFORM
ARG BUILDPLATFORM

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the app source
COPY . .

# Build the Next.js app
RUN npm run build

# Production image
FROM node:20-slim AS runner

# Install ca-certificates for SSL/TLS connections
# RUN apk add --no-cache ca-certificates
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose port
EXPOSE 80

# Start the app using the Next.js standalone server
CMD HOSTNAME=0.0.0.0 PORT=80 node server.js