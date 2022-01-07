#declare 2d array to store covide datas
# w, h = 100, 100
# data = [[0 for x in range(w)] for y in range(h)] 

state_data = []

# Setting the data here
def _data(response_info):
    print("State in " + response_info[0]['country'])

    for i in range(len(response_info)):
        print(i)
        print("State: " + response_info[i]['state'])
        print(response_info[i]['state'])
        state_data.append(response_info[i]['state'])


        # data[i] = response_info[i]['population']
        # actual_data(response_info, i)

    print(state_data)


# Getting the data from actual data set sections
# def actual_data(response_info, num):
#     # for actual_data_set in response_info[0]['actuals']:
#     #     print(actual_data_set)
#     #print("positiveTests Cases: " + str(response_info[num]['actuals']['positiveTests']))
#     data.append(response_info[num]['actuals']['positiveTests'])
#     #print("negativeTests Cases: " + str(response_info[num]['actuals']['negativeTests']))
#     data.append(response_info[num]['actuals']['negativeTests'])
#     #print("infection rate: " + str(response_info[num]['metrics']['infectionRate']))
#     data.append(response_info[num]['metrics']['infectionRate'])


