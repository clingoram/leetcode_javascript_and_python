from oop.Animals import Animals

class Tortoises(Animals):
    
    def __init__(self, name, age, food,speciceType:str):
        super().__init__(name, age, food)
        self.speciceType = speciceType

    def eat(self):
        return super().eat()
    
    def environment(self):
        env = {"沙漠型陸龜":"沙漠型陸龜需要較高的溫度熱點",
               "地中海型陸龜":"有冬眠習性",
               "雨林型陸龜":"需要較高的濕度",
               "海島型陸龜":"需要較高的濕度"
               }

        for key, value in env.items():
            if key in self.speciceType:
                print(f"{key}: {value}")

    def hibernation(self):
        print("if it's really cold")