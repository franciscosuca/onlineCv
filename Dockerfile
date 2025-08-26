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
RUN apk add --no-cache ca-certificates

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist/standalone ./
COPY --from=builder /app/dist/static ./dist/static
COPY --from=builder /app/public ./public

# Set NODE_ENV to production
ENV NODE_ENV=production

# Set the port that the app will listen on
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start the app using the Next.js standalone server
CMD ["node", "server.js"]