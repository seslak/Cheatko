<?php
$dict = "freq-" . $_GET["dict"] . ".pkl";
$command = escapeshellcmd('python3 freq.py ' . $dict);
$output = shell_exec($command . ' 2>&1');
echo $output;
sleep(5);
$file = "dicts/" . $dict;
if ($_GET["dict"] != "mk" && $_GET["dict"] != "en" && $_GET["dict"] != "es" && $_GET["dict"] != "sr" && $_GET["dict"] != "de" ) {
 unlink($file);
}
?>