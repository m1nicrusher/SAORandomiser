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
var List1 = ["冯若兮", "郭润泽", "郭　伊", "韩馨影", "黄　玥", "金嘉瑞", "李佳音", "李芃霖", "李　欣", "李贝楠憓", "刘泽缘", "王语晗", "王梓颐", "温宁昕", "肖翼菲", "于　玥", "虞才乐", "张北华", "张瀚之", "张雅秋", "赵蔚琳", "赵　扬", "赵子嘉", "支　昕", "梁珺杨", "蔡坤洋", "曾悦祥", "程文韬", "傅雨凡", "李佳蒙", "李瑞岩", "梁博皓", "林涵坤", "刘　铭", "刘易诚", "毛　熠", "彭昊宇", "齐垠皓", "孙可名", "王玺睿", "王轩廷", "王云浩", "伍文彬", "肖嘉元", "邢一凡", "杨　润", "杨中天", "张千越", "张子轩", "祝晨皓"];
var List2 = ["白欣蕊", "崔湘怡", "丁思淇", "高也茜", "黄乐然", "江　南", "李睿嘉", "林雨阳", "刘力端", "是依辰", "谭笑凡", "汪鑫雨", "王炜煊", "吴承倍", "吴悠然", "徐瑾如", "杨亦瑄", "姚奕如", "张甲易", "张俣桐", "赵珈悉", "朱　芸", "付国言", "盖彦赫", "高　晟", "何思远", "荆逸宸", "梁智博", "刘　焜", "罗嘉祺", "罗沐天", "裴浚州", "田　翼", "王圣庆", "王同晖", "王壹帆", "席　瑞", "徐广恺", "徐力行", "徐岳新", "杨昕锐", "姚亦嵩", "于悦海", "苑洪皓", "张丰烁", "张逸飞", "周永凝", "朱子先"];
var List3 = ["曹雨桐", "陈子璐", "封　景", "高羽然", "高子茜", "李贝楠", "刘俊佳", "刘美含", "马茉菲", "倪晔菲", "尚佳慧", "石浩依", "王安安", "王彩伊", "王家锦", "王寓瑶", "魏烨昕", "薛曦容", "颜佳怡", "雍　佳", "赵　爽", "朱若溪", "曹书久", "从羽林", "樊昱辰", "高　雨", "郭欣耀", "侯毛申", "胡益铭", "金祖豫", "刘君榕", "孟家润", "潘春霖", "彭子翀", "浦世嘉", "阮　予", "宋秋池", "苏京溪", "汪劭祺", "王泓嵇", "王哲也", "徐力航", "杨昊泽", "余昭熹", "原晟源", "张墨迪", "张一琦", "张子墨", "张心妍"];
var List4 = ["崔思琪", "韩佳一", "胡艺千", "李　畅", "李伦佳", "李沐晨", "李曈曈", "李潇涵", "李　玉", "李芸涵", "刘欣雨", "刘　钰", "沈小雅", "汤心禾", "田上上", "王文珊", "王雨涵", "王子怡", "隗　伊", "邢健颖", "杨思语", "杨心欣", "于　淼", "张依涵", "赵若曦", "赵思雨", "赵一凡", "任晴晴", "蔡逸凡", "陈嘉文", "管子涵", "刘涵宇", "鲁康睿", "马　博", "冉浩芃", "王　子", "吴　炅", "杨派荣", "杨文清", "杨忠政", "余祉炫", "张东晓", "张凯翔", "张无忌", "张　植", "张子豪", "郑子俊", "朱浩然", "贺　萌"];
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