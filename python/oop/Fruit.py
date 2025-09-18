import math

class Fruit:

  def __init__(self,name:str,price:int,quantity:int):
    '''
    等同於PHP __construct()
    '''
    self.name = name
    self.price = price
    self.quantity = quantity

  
  # methods
  def calculate(self):
    '''
    計算總價

    優惠:
    滿3送1
    '''
    return self.price * (self.quantity - math.floor(self.quantity / 3))

  def make_seedling(self):
    print("Make seedling.")
  
  def make_watering(self):
    print("Make watering")