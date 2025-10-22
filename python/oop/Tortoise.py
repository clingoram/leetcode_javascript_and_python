# 陸龜
from oop.Animal import Animal

class Tortoise(Animal):

    # class variable
    # a property of the class itself.
    specice = "Spurred tortoise"
    
    def __init__(self, name, age, food,speciceType:str):
        # instance variable.Unique to each instance
        super().__init__(name, age, food)
        self.speciceType = speciceType

    def eat(self):
        cant = ["草酸高食物","糖份高，例如水果","人類的食物"]
        
        print(f"{self.food}，但有些不適合吃")
    
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

    def avgWeight(self,*args):
        return sum(args) / 2
    
    # 繼承、覆寫
    def hibernation(self):
        return super().hibernation()
    
    # 抽象
    def attack(self):
        print("咬，但不太會發生")
    
    def affend(self):
        print("縮進殼內")