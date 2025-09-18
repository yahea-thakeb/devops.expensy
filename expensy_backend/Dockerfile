# Stage 1: Build the backend
FROM node:20 AS builder

WORKDIR /app

# Install dependencies including dev tools like TypeScript
COPY package*.json ./
RUN npm install

# Install TypeScript globally (fixes tsc: not found)
RUN npm install -g typescript

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Run the compiled backend
FROM node:20

WORKDIR /app

# Copy compiled code only
COPY --from=builder /app .

# Install only production dependencies
RUN npm install --omit=dev

EXPOSE 4000

CMD ["node", "dist/server.js"]
