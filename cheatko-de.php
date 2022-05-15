<?php
// This is bridge file. Connects JS front-end with back-end python.

$word1 = $_GET['word1'];
$word11 = $_GET['word11'];
$word12 = $_GET['word12'];
$word13 = $_GET['word13'];
$word14 = $_GET['word14'];
$word15 = $_GET['word15'];


if ($_GET['word2']) {
    $word2 = $_GET['word2'];
    $word21 = $_GET['word21'];
    $word22 = $_GET['word22'];
    $word23 = $_GET['word23'];
    $word24 = $_GET['word24'];
    $word25 = $_GET['word25'];
}


if ($_GET['word3']) {
    $word3 = $_GET['word3'];
    $word31 = $_GET['word31'];
    $word32 = $_GET['word32'];
    $word33 = $_GET['word33'];
    $word34 = $_GET['word34'];
    $word35 = $_GET['word35'];
}

if ($_GET['word4']) {
    $word4 = $_GET['word4'];
    $word41 = $_GET['word41'];
    $word42 = $_GET['word42'];
    $word43 = $_GET['word43'];
    $word44 = $_GET['word44'];
    $word45 = $_GET['word45'];
}

if ($_GET['word5']) {
    $word5 = $_GET['word5'];
    $word51 = $_GET['word51'];
    $word52 = $_GET['word52'];
    $word53 = $_GET['word53'];
    $word54 = $_GET['word54'];
    $word55 = $_GET['word55'];
}

$freqID = $_GET['freqID'];

$command = escapeshellcmd('python3 cheat-de.py ' . $word1 . ' ' . $word11 . ' ' . $word12 . ' ' . $word13 . ' ' . $word14 . ' ' . $word15 . ' ' . $freqID);
if ($word2) {
    $command = escapeshellcmd('python3 cheat-de.py ' . $word1 . ' ' . $word11 . ' ' . $word12 . ' ' . $word13 . ' ' . $word14 . ' ' . $word15 . ' ' . $word2 . ' ' . $word21 . ' ' . $word22 . ' ' . $word23 . ' ' . $word24 . ' ' . $word25 . ' ' . $freqID);
}

if ($word3) {
    $command = escapeshellcmd('python3 cheat-de.py ' . $word1 . ' ' . $word11 . ' ' . $word12 . ' ' . $word13 . ' ' . $word14 . ' ' . $word15 . ' ' . $word2 . ' ' . $word21 . ' ' . $word22 . ' ' . $word23 . ' ' . $word24 . ' ' . $word25 . ' ' . $word3 . ' ' . $word31 . ' ' . $word32 . ' ' . $word33 . ' ' . $word34 . ' ' . $word35 . ' ' . $freqID);
}

if ($word4) {
    $command = escapeshellcmd('python3 cheat-de.py ' . $word1 . ' ' . $word11 . ' ' . $word12 . ' ' . $word13 . ' ' . $word14 . ' ' . $word15 . ' ' . $word2 . ' ' . $word21 . ' ' . $word22 . ' ' . $word23 . ' ' . $word24 . ' ' . $word25 . ' ' . $word3 . ' ' . $word31 . ' ' . $word32 . ' ' . $word33 . ' ' . $word34 . ' ' . $word35 . ' ' . $word4 . ' ' . $word41 . ' ' . $word42 . ' ' . $word43 . ' ' . $word44 . ' ' . $word45 . ' ' . $freqID);
}

if ($word5) {
    $command = escapeshellcmd('python3 cheat-de.py ' . $word1 . ' ' . $word11 . ' ' . $word12 . ' ' . $word13 . ' ' . $word14 . ' ' . $word15 . ' ' . $word2 . ' ' . $word21 . ' ' . $word22 . ' ' . $word23 . ' ' . $word24 . ' ' . $word25 . ' ' . $word3 . ' ' . $word31 . ' ' . $word32 . ' ' . $word33 . ' ' . $word34 . ' ' . $word35 . ' ' . $word4 . ' ' . $word41 . ' ' . $word42 . ' ' . $word43 . ' ' . $word44 . ' ' . $word45 . ' ' . $word5 . ' ' . $word51 . ' ' . $word52 . ' ' . $word53 . ' ' . $word54 . ' ' . $word55 . ' ' . $freqID);
}
$output = shell_exec($command . ' 2>&1');
 echo $output;
?>