import sys
import pandas as pd
datafilef = "dicts/" + sys.argv[1]
freq = pd.read_pickle(datafilef)
max_val = freq.max()[1:-1].max()
freq = freq.sort_values(by=[0]).iloc[:,0:].values
print('<div id="freqMainDiv" style="font-size: 12px; text-align: center;">')
print ('<br><br><div style="color: white; text-align: center; font-size: 12px; border-bottom: 1px; border-color: #fff;"><div style="float: left; width: 10%; color: white; background-color: #272829;">Letter</div><div style="float: left; color: white; background-color: #272829; width: 10%;">1<sup>st</sup></div><div style="float: left; color: white; background-color: #272829; width: 10%;">2<sup>nd</sup></div><div style="float: left; color: white; background-color: #272829; width: 10%;">3<sup>rd</sup></div><div style="float: left; color: white; background-color: #272829; width: 10%;">4<sup>th</sup></div><div style="float: left; color: white; background-color: #272829; width: 10%;">5<sup>th</sup></div></div><br>')

try:
    i = 0
    while i < len(freq):
        if freq[i][1] == 0:
            cor1 = 0
        else:
            cor1 = freq[i][1]/max_val*215
        if freq[i][2] == 0:
            cor2 = 0
        else:
            cor2 = freq[i][2]/max_val*215
        if freq[i][3] == 0:
            cor3 = 0
        else:
            cor3 = freq[i][3]/max_val*215
        if freq[i][4] == 0:
            cor4 = 0
        else:
            cor4 = freq[i][4]/max_val*215
        if freq[i][5] == 0:
            cor5 = 0
        else:
            cor5 = freq[i][5]/max_val*215
        print ('<div style="color: white; text-align: center; font-size: 12px;"><div style="float: left; width: 10%; color: white; background-color: #272829;">' + str(freq[i][0]) + '</div><div style="float: left; background-color: hsl(' + str(cor1) + ', 49%, 52%); width: 10%;">' + str(freq[i][1]) + '</div><div style="float: left; background-color: hsl(' + str(cor2) + ', 49%, 52%); width: 10%;">' + str(freq[i][2]) + '</div><div style="float: left; background-color: hsl(' + str(cor3) + ', 49%, 52%); width: 10%;">' + str(freq[i][3]) + '</div><div style="float: left; background-color: hsl(' + str(cor4) + ', 49%, 52%); width: 10%;">' + str(freq[i][4]) + '</div><div style="float: left; background-color: hsl(' + str(cor5) + ', 49%, 52%); width: 10%;">' + str(freq[i][5]) + '</div></div><br>')
        i = i + 1
    print('</div>')
except:
    print("Cannot load frequency distribution.")