from oop.Animal import Animal

class Lion(Animal):
    def __init__(self, name, age, food):
        super().__init__(name, age, food)
    
    def environment(self):
        print("溫暖")

    # 覆寫父類別的方法
    def eat(self):
        print(f"{self.name} 正在快速撕咬 {''.join(self.food)}。")

    # abstract
    def affend(self):
        print("同攻擊")

    def attack(self):
        print("咬抓")