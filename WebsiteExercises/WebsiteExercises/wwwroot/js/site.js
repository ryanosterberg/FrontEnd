﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function showHide(id) {
    var element = document.getElementById(id);
    if (element.style.display !== "none") {
        element.style.display = "none"
        }
    else {
        element.style.display ="block"
    }
}