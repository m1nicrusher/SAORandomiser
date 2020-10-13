/*
SAO Randomiser is a lightweight web app to help you made decision randomly.
Copyright (C) 2020 Stephen Z.

This file is part of SAO Randomiser.

    SAO Randomiser is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    SAO Randomiser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with SAO Randomiser.  If not, see <https://www.gnu.org/licenses/>.
 */

// Configurations
var List1 = ["Bulldozer", "Steamroller", "Excavator", "Zen"];
var List2 = ["Obsidian", "Lapis Lazuli", "Ruby", "Diamond", "Emerald", "Sapphire"];
var List3 = ["AK47", "M4A4", "FN57", "MP7", "AWP", "MP5-SD", "USP", "P90", "ZEUS x27"];
var List4 = ["Richland", "Kabini", "Kaveri", "Carrizo", "Picasso", "Renoir"];
var Lists = [];
var rolling = [];
Lists.push(List1);
Lists.push(List2);
Lists.push(List3);
Lists.push(List4);
rolling.push(false);
rolling.push(false);
rolling.push(false);
rolling.push(false);
var I = [-1, -1, -1, -1];
var timeout = 70;
var startButton;
function init()
{
    startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var showCaptionButton = document.getElementById("showCaption");
    startButton.onclick = startRolling;
    stopButton.onclick = stopRolling;
    showCaptionButton.onclick = showCaption;
}

function rollingI(ii, array)
{

    if (I[ii] != array.length - 1)
        I[ii]++;
    else
        I[ii] = 0;
    return I[ii];
}

function startRolling()
{
    if (startButton == null)
    {
        alert("Sorry, the web page is still loading; please wait...");
        return;
    }
    startButton.setAttribute("class", "PressedStartButton");
    startButton.innerHTML = "In Progress...";
    for (var i = 0; i < 4; i++)
    {
        shuffle(Lists[i]);
        rolling[i] = true;
    }
    setTimeout(function () {showCaption()}, 100);
    setTimeout(function() {Roll("screen1")}, timeout);
    setTimeout(function() {Roll("screen2")}, timeout);
    setTimeout(function() {Roll("screen3")}, timeout);
    setTimeout(function() {Roll("screen4")}, timeout);
    setTimeout(function() {stopRolling(0)}, 5000);
    setTimeout(function() {stopRolling(1)}, 6000);
    setTimeout(function() {stopRolling(2)}, 7000);
    setTimeout(function() {stopRolling(3)}, 8000);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function Roll(screenId)
{

    var num = screenId.split("screen")[1] - 1;
    var screen = document.getElementById(screenId)
    var hidden = screen.getElementsByClassName("HiddenScreen")[0];
    var up = screen.getElementsByClassName("UpperScreen")[0];
    var show = screen.getElementsByClassName("ShowScreen")[0];
    var low = screen.getElementsByClassName("LowerScreen")[0];
    var pre = screen.getElementsByClassName("PredictScreen")[0];
    if (hidden != null)
        hidden.remove();
    up.setAttribute("class", "HiddenScreen");
    show.setAttribute("class", "UpperScreen");
    low.setAttribute("class", "ShowScreen");
    pre.setAttribute("class", "LowerScreen");

    var newpre = document.createElement("div");
    var newpreContent = document.createElement("p");
    newpreContent.innerText = Lists[num][rollingI(num, Lists[num])].toString();
    newpre.setAttribute("class", "PredictScreen");
    newpre.appendChild(newpreContent);
    screen.appendChild(newpre);
    if (rolling[num])
        setTimeout(function() {Roll(screenId)}, timeout);
}

function stopRolling(num)
{
    rolling[num] = false;
    if (!rolling[3])
    {
        startButton.setAttribute("class", "StartButton");
        startButton.innerHTML = "Start Rolling";
    }
}

function showCaption()
{
    var captions = document.getElementsByClassName("ScreenCaption");
    for (var i = 0; i < 4; i++)
    {
        console.log(captions[i]);
        captions[i].setAttribute("class", "ScreenCaption ShowScreenCaption");
    }
}
window.onload = init;
