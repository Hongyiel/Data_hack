#declare 2d array to store covide datas
# w, h = 100, 100
# data = [[0 for x in range(w)] for y in range(h)] 

state_data = []

# Setting the data here
def _data(response_info):
    print("State in " + response_info[0]['country'])

    for i in range(len(response_info)):
        # print(i)
        # print("State: " + response_info[i]['state'])
        # print(response_info[i]['state'])
        state_data.append(response_info[i]['state'])
        # data[i] = response_info[i]['population']
        # actual_data(response_info, i)
    return state_data

population_data = []
# population data
def pop_data(response_info):
    for i in range(len(response_info)):
        population_data.append(response_info[i]['population'])

    return population_data

# adding the data Here...
case_data = []
def act_data_case(response_info):
    for i in range(len(response_info)):
        case_data.append(response_info[i]['actuals']['cases'])
    return case_data

death_data = []
def act_data_death(response_info):
    for i in range(len(response_info)):
        death_data.append(response_info[i]['actuals']['deaths'])
    return death_data

positiveTests_data = []
def act_data_positiveTests(response_info):
    for i in range(len(response_info)):
        positiveTests_data.append(response_info[i]['actuals']['positiveTests'])
    return positiveTests_data

negativeTests_data = []
def act_data_negativeTests(response_info):
    for i in range(len(response_info)):
        negativeTests_data.append(response_info[i]['actuals']['negativeTests'])
    return negativeTests_data

# set data numbers )Ex. if 'OR' then return 38 numbers for data
def all_data(state,pop,case,death,pos,neg):
    return [state, pop, case,death,pos,neg]



# dont fix this under area
def sorting_data(name,state_data,real_data):
    for i in range(len(state_data)):
        if name == state_data[i]:
            return real_data[i]
