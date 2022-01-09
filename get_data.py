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
    return state_data
