FROM node:22-alpine AS builder

WORKDIR /yuteng_lin_final_site

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runner

WORKDIR /yuteng_lin_final_site

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /yuteng_lin_final_site/out /usr/share/nginx/html

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]
