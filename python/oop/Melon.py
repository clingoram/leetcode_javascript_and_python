from oop.Fruit import Fruit

class Melon(Fruit):

  def __init__(self, name, price, quantity,seed):
    super().__init__(name, price, quantity)
    self.seed = seed


  # over write
  def make_seedling(self):
    print("make melon seed")
  
  def palnt(self):
    print("plants")