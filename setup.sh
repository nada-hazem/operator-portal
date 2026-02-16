set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE} Starting Operator Portal Setup...${NC}"

if ! command -v node &> /dev/null
then
    echo -e "${RED} Node.js is not installed. Please install Node.js (v20+) and try again.${NC}"
    exit
fi

echo -e "${BLUE}🧹 Cleaning up old files...${NC}"
rm -rf node_modules package-lock.json

echo -e "${BLUE}📦 Installing npm dependencies (Pinia, Tailwind, Router)...${NC}"
npm install

echo -e "${BLUE}🛡️ Running Quality Guards...${NC}"

echo -e "  - Checking for code smells (Linting)..."
npm run lint

echo -e "  - Verifying types (TypeScript check)..."
npm run type-check

echo -e "${BLUE}🧪 Running Unit Tests...${NC}"
npm run test:unit

echo -e "  - Polishing code style (Prettier)..."
npm run format

echo -e "${GREEN}✨ Quality check passed!${NC}"


echo -e "${GREEN} Setup Complete!${NC}"
echo -e "${BLUE}⚡ Starting Vite development server...${NC}"
npm run dev