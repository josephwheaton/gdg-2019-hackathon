
from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=200)
    redeemable_points = models.IntegerField(default=0)

    def create_user(self, first_name, last_name, email ):
        user = self.model(
            email = email,
            first_name = first_name,
            last_name = last_name,
            
        )
        User.objects.create(user)
        return user
    
    def check_if_created(self, info):
        pass


class Location(models.Model):
    # max length is arb. currently
    lat = models.FloatField()
    long = models.FloatField()
    name = models.CharField(max_length=50)

    def create_Location(self, info):
        pass

    def check_if_created(self, info):
        pass


class Target(models.Model):
    location = Location()
    image = models.ImageField()

    # time this target started
    startTime = models.DateTimeField()
    # a default ammount currently
    points = models.IntegerField(default=20)

    def create_target(self,info):
        Target.objects.create()
        pass

    # functionality: if same area is marked by different people can add pictures to the original  target,
    # so no dupes.
    def check_if_created(self, info):

        pass
