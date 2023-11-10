## Docker Build
docker build -t material-dashboard-angular .
#docker run --network host material-dashboard-angular
docker run -p 8080:4200 material-dashboard-angular
