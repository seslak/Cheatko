import sys
import pandas as pd
datafile = "dicts/dict-de.csv"
dataset = pd.read_csv(datafile)

try:
    word_container = []

    w1 = []
    w1.append(sys.argv[1])
    w1.append(int(sys.argv[2]))
    w1.append(int(sys.argv[3]))
    w1.append(int(sys.argv[4]))
    w1.append(int(sys.argv[5]))
    w1.append(int(sys.argv[6]))
    word_container.append(w1)

    if len(sys.argv) > 8:
        w2 = []
        w2.append(sys.argv[7])
        w2.append(int(sys.argv[8]))
        w2.append(int(sys.argv[9]))
        w2.append(int(sys.argv[10]))
        w2.append(int(sys.argv[11]))
        w2.append(int(sys.argv[12]))
        word_container.append(w2)

    if len(sys.argv) > 14:
        w3 = []
        w3.append(sys.argv[13])
        w3.append(int(sys.argv[14]))
        w3.append(int(sys.argv[15]))
        w3.append(int(sys.argv[16]))
        w3.append(int(sys.argv[17]))
        w3.append(int(sys.argv[18]))
        word_container.append(w3)

    if len(sys.argv) > 20:
        w4 = []
        w4.append(sys.argv[19])
        w4.append(int(sys.argv[20]))
        w4.append(int(sys.argv[21]))
        w4.append(int(sys.argv[22]))
        w4.append(int(sys.argv[23]))
        w4.append(int(sys.argv[24]))
        word_container.append(w4)

    if len(sys.argv) > 26:
        w5 = []
        w5.append(sys.argv[25])
        w5.append(int(sys.argv[26]))
        w5.append(int(sys.argv[27]))
        w5.append(int(sys.argv[28]))
        w5.append(int(sys.argv[29]))
        w5.append(int(sys.argv[30]))
        word_container.append(w5)

    i = 0
    p = []
    r = []
    s = []
    t = []
    while i < len(word_container):
        n = 1
        while n < len(word_container[i]):
            if word_container[i][n] == 0:
                r.append(word_container[i][0][n-1])
                w2 = []
                w2.append(word_container[i][0][n-1])
                w2.append(n-1)
                t.append(w2)
            if word_container[i][n] == 1:
                w1 = []
                w1.append(word_container[i][0][n-1])
                w1.append(n-1)
                p.append(w1)
            if word_container[i][n] == 2:
                if len(p) > 0:
                    k = 0
                    while k < len(p):
                        if word_container[i][0][n-1] in p[k][0]:
                            w2 = []
                            w2.append(word_container[i][0][n-1])
                            w2.append(n-1)
                            t.append(w2)
                        if word_container[i][0][n-1] not in p[k][0]:
                            s.append(word_container[i][0][n-1])
                        k = k + 1
                else:
                    s.append(word_container[i][0][n-1])
            n = n + 1
        i = i + 1
    
    k = 0
    while k < len(r):
        while r[k] in s:
            s.remove(r[k])
        k = k + 1

    k = 0
    while k < len(p):
        while p[k][0] in s:
            s.remove(p[k][0])
        k = k + 1

    i = 0
    partsol = []
    solution = []
    finalsolution = []
    x = 0
    if len(p) == 0:
        solution = dataset["wordy"]
    else:
        while i < len(dataset):
            n = 0
            while n < len(p):
                if dataset["wordy"][i][p[n][1]] == p[n][0]:
                    partsol.append(dataset["wordy"][i])
                if len(partsol) == len(p):
                    solution.append(partsol[0])
                n = n + 1
            partsol = []
            i = i + 1

    i = 0
    partsol = []
    x = 0
    if len(r) == 0:
        finalsolution = solution
    else:
        while i < len(solution):
            n = 0
            while n < len(r):
                if solution[i].find(r[n][0]) != -1:
                    partsol.append(solution[i])
                if len(partsol) == len(r):
                    finalsolution.append(partsol[0])
                n = n + 1
            partsol = []
            i = i + 1

    from copy import deepcopy
    solution = deepcopy(finalsolution)
    i = 0
    partsol = []
    x = 0
    finalsolution = []

    if len(s) == 0:
        finalsolution = solution
    else:
        while i < len(solution):
            n = 0
            while n < len(s):
                if solution[i].find(s[n][0]) == -1:
                    partsol.append(solution[i])
                if len(partsol) == len(s):
                    finalsolution.append(partsol[0])
                n = n + 1
            partsol = []
            i = i + 1

    from copy import deepcopy
    solution = deepcopy(finalsolution)
    i = 0
    partsol = []
    x = 0
    finalsolution = []
    if len(t) == 0:
        finalsolution = solution
    else:
        while i < len(solution):
            n = 0
            while n < len(t):
                if solution[i][t[n][1]] != t[n][0]:
                    partsol.append(solution[i])
                if len(partsol) == len(t):
                    finalsolution.append(partsol[0])
                n = n + 1
            partsol = []
            i = i + 1
    
    from support_functions import index_letters
    from support_functions import frequency
    freq = []
    freq = frequency(finalsolution,index_letters(finalsolution))
    freq = pd.DataFrame(freq)
    
    if len(sys.argv) < 9:
        f = str(sys.argv[7])
        freq_id = "dicts/freq-" + str(sys.argv[7]) + ".pkl"
        
    if len(sys.argv) > 8:
        f = str(sys.argv[13])
        freq_id = "dicts/freq-" + str(sys.argv[13]) + ".pkl"
        
    if len(sys.argv) > 14:
        f = str(sys.argv[19])
        freq_id = "dicts/freq-" + str(sys.argv[19]) + ".pkl"

    if len(sys.argv) > 20:
        f = str(sys.argv[25])
        freq_id = "dicts/freq-" + str(sys.argv[25]) + ".pkl"

    if len(sys.argv) > 26:
        f = str(sys.argv[31])
        freq_id = "dicts/freq-" + str(sys.argv[31]) + ".pkl"   

    freq.to_pickle(freq_id)

        
    i = 0
    solution = []
    while i < len(finalsolution):
        a2 = 0
        a1 = []
        a1.append(finalsolution[i])
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][0]),:].values[1]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][0]),:].values[6]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][1]),:].values[2]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][1]),:].values[6]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][2]),:].values[3]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][2]),:].values[6]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][3]),:].values[4]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][3]),:].values[6]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][4]),:].values[5]
        a2 = a2 + freq.iloc[freq[0].tolist().index(finalsolution[i][4]),:].values[6]
        a1.append(a2)
        solution.append(a1)
        i = i + 1

    solution = pd.DataFrame(solution).sort_values(by=[1],ascending=False).iloc[:,0:].values

    i = 0
    if len(solution) == 0:
        print("No solution.")
    else:
        if len(solution) > 100:
            n = 100
        else:
            n = len(solution)
        print('<div id="loader" class="lds-facebook" style="display: none"><div></div><div></div><div></div></div>')
        while i < n:
            print(str(solution[i][0]) + '&#9 <progress id="suggestion" max="' + str(freq.max()[1:-1].max()*10*1.1) + '" value="' + str(solution[i][1]) + '" style="color: #272829; border-radius: 0px; background-color: white;"></progress><br>')
            i = i + 1
        print('<script type="text/JavaScript">freqLoad("' + str(f) + '");</script>')
except:
    print("Something is wrong. Let's try again.")