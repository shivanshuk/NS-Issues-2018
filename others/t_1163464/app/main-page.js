"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("color");
var PhotoViewer = require("nativescript-photoviewer");
var imageFromURL3 = "https://apod.nasa.gov/apod/image/1804/IC4592_WiseAntonucci_5000.jpg";
var imageFromURL4 = "https://apod.nasa.gov/apod/image/1804/LyridCrater_Goldpaint_1920.jpg";
var imageFromURL1 = "https://apod.nasa.gov/apod/image/1804/FalconTessLaunchKraus.jpg";
var imageFromURL2 = "https://apod.nasa.gov/apod/image/1804/BubbleNebHST_kakitsev2048.jpg";
// Add to array and pass to showViewer
var myImages = [imageFromURL3, imageFromURL4, imageFromURL1, imageFromURL2];
var photoViewer = createPhotoViewer();
function navigatingTo(args) {
    var page = args.object;
}
exports.navigatingTo = navigatingTo;
function loadViewer() {
    photoViewer.showViewer(myImages, 0);
}
exports.loadViewer = loadViewer;
function createPhotoViewer() {
    var photoViewer = new PhotoViewer();
    // Caption font-style settings (optional - iOS only)
    photoViewer.fontFamily = "Avenir-Roman";
    photoViewer.titleFontSize = 20;
    photoViewer.summaryFontSize = 16;
    photoViewer.creditFontSize = 14;
    photoViewer.titleColor = new color_1.Color("#fff").ios;
    photoViewer.summaryColor = new color_1.Color("#99813c").ios;
    photoViewer.creditColor = new color_1.Color("#fed700").ios;
    photoViewer.completitionCallback = galleryLoaded; // iOS only
    photoViewer.startIndex = 0; // start index for the fullscreen gallery
    return photoViewer;
}
function galleryLoaded() {
    console.log("gallery Loaded");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsK0JBQThCO0FBQzlCLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRXhELElBQUksYUFBYSxHQUFHLHFFQUFxRSxDQUFDO0FBQzFGLElBQUksYUFBYSxHQUFHLHNFQUFzRSxDQUFDO0FBQzNGLElBQUksYUFBYSxHQUFHLGlFQUFpRSxDQUFDO0FBQ3RGLElBQUksYUFBYSxHQUFHLHFFQUFxRSxDQUFDO0FBRTFGLHNDQUFzQztBQUN0QyxJQUFJLFFBQVEsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzVFLElBQU0sV0FBVyxHQUFHLGlCQUFpQixFQUFFLENBQUM7QUFFeEMsc0JBQTZCLElBQWU7SUFDeEMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNuQyxDQUFDO0FBRkQsb0NBRUM7QUFFRDtJQUNJLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFGRCxnQ0FFQztBQUVEO0lBQ0ksSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUUxQyxvREFBb0Q7SUFDaEQsV0FBVyxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7SUFDeEMsV0FBVyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDL0IsV0FBVyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDakMsV0FBVyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDaEMsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDL0MsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFFbkQsV0FBVyxDQUFDLG9CQUFvQixHQUFHLGFBQWEsQ0FBQyxDQUFDLFdBQVc7SUFDN0QsV0FBVyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7SUFFckUsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUN2QixDQUFDO0FBRUQ7SUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuY29uc3QgUGhvdG9WaWV3ZXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBob3Rvdmlld2VyXCIpO1xuXG52YXIgaW1hZ2VGcm9tVVJMMyA9IFwiaHR0cHM6Ly9hcG9kLm5hc2EuZ292L2Fwb2QvaW1hZ2UvMTgwNC9JQzQ1OTJfV2lzZUFudG9udWNjaV81MDAwLmpwZ1wiO1xudmFyIGltYWdlRnJvbVVSTDQgPSBcImh0dHBzOi8vYXBvZC5uYXNhLmdvdi9hcG9kL2ltYWdlLzE4MDQvTHlyaWRDcmF0ZXJfR29sZHBhaW50XzE5MjAuanBnXCI7XG52YXIgaW1hZ2VGcm9tVVJMMSA9IFwiaHR0cHM6Ly9hcG9kLm5hc2EuZ292L2Fwb2QvaW1hZ2UvMTgwNC9GYWxjb25UZXNzTGF1bmNoS3JhdXMuanBnXCI7XG52YXIgaW1hZ2VGcm9tVVJMMiA9IFwiaHR0cHM6Ly9hcG9kLm5hc2EuZ292L2Fwb2QvaW1hZ2UvMTgwNC9CdWJibGVOZWJIU1Rfa2FraXRzZXYyMDQ4LmpwZ1wiO1xuIFxuLy8gQWRkIHRvIGFycmF5IGFuZCBwYXNzIHRvIHNob3dWaWV3ZXJcbnZhciBteUltYWdlcyA9IFtpbWFnZUZyb21VUkwzLCBpbWFnZUZyb21VUkw0LCBpbWFnZUZyb21VUkwxLCBpbWFnZUZyb21VUkwyXTtcbmNvbnN0IHBob3RvVmlld2VyID0gY3JlYXRlUGhvdG9WaWV3ZXIoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7IFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFZpZXdlcigpIHtcbiAgICBwaG90b1ZpZXdlci5zaG93Vmlld2VyKG15SW1hZ2VzLCAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvdG9WaWV3ZXIoKSB7XG4gICAgY29uc3QgcGhvdG9WaWV3ZXIgPSBuZXcgUGhvdG9WaWV3ZXIoKTtcblxuLy8gQ2FwdGlvbiBmb250LXN0eWxlIHNldHRpbmdzIChvcHRpb25hbCAtIGlPUyBvbmx5KVxuICAgIHBob3RvVmlld2VyLmZvbnRGYW1pbHkgPSBcIkF2ZW5pci1Sb21hblwiO1xuICAgIHBob3RvVmlld2VyLnRpdGxlRm9udFNpemUgPSAyMDtcbiAgICBwaG90b1ZpZXdlci5zdW1tYXJ5Rm9udFNpemUgPSAxNjtcbiAgICBwaG90b1ZpZXdlci5jcmVkaXRGb250U2l6ZSA9IDE0O1xuICAgIHBob3RvVmlld2VyLnRpdGxlQ29sb3IgPSBuZXcgQ29sb3IoXCIjZmZmXCIpLmlvcztcbiAgICBwaG90b1ZpZXdlci5zdW1tYXJ5Q29sb3IgPSBuZXcgQ29sb3IoXCIjOTk4MTNjXCIpLmlvcztcbiAgICBwaG90b1ZpZXdlci5jcmVkaXRDb2xvciA9IG5ldyBDb2xvcihcIiNmZWQ3MDBcIikuaW9zO1xuICAgIFxuICAgIHBob3RvVmlld2VyLmNvbXBsZXRpdGlvbkNhbGxiYWNrID0gZ2FsbGVyeUxvYWRlZDsgLy8gaU9TIG9ubHlcbiAgICBwaG90b1ZpZXdlci5zdGFydEluZGV4ID0gMDsgLy8gc3RhcnQgaW5kZXggZm9yIHRoZSBmdWxsc2NyZWVuIGdhbGxlcnlcblxuICAgIHJldHVybiBwaG90b1ZpZXdlcjtcbn1cblxuZnVuY3Rpb24gZ2FsbGVyeUxvYWRlZCgpe1xuICAgIGNvbnNvbGUubG9nKGBnYWxsZXJ5IExvYWRlZGApO1xufVxuXG4iXX0=