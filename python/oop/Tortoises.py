from oop.Animals import Animals

class Tortoises(Animals):
    
    def __init__(self, name, age, food,speciceType:str):
        super().__init__(name, age, food)
        self.speciceType = speciceType

    def eat(self):
        return super().eat()
    
    
    # 覆寫父類別的方法
    def environment(self):
        '''
        環境
        '''
        env = {"沙漠型陸龜":"需要較高的溫度熱點",
               "地中海型陸龜":"有冬眠習性，但會因為所在地溫度而不冬眠",
               "雨林型陸龜":"需要較高的濕度",
               "海島型陸龜":"需要較高的濕度"
               }

        for key, value in env.items():
            try:
                if key in self.speciceType:
                    print(f"{key}: {value}")
            except NameError:
                print("eror")

    def hibernation(self):
        '''
        冬眠
        '''
        print("if it's really cold")