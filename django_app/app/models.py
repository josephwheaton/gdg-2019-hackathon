from django.db import models


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
