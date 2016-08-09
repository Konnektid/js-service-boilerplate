FROM node:5.12.0
ENV PORT 3000
ENV NODE_ENV=production
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install && \
    npm run build
EXPOSE ${PORT}
CMD npm start
