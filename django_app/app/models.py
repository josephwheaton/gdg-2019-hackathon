from django.db import models


class Location(models.Model):
    location_id = models.AutoField(primary_key=True)
    # max length is arb. currently
    lat = models.FloatField()
    long = models.FloatField()


    def create_Location(self, latitude, longitude):
        Location.objects.create(self, Lat=latitude, long=longitude)

    def check_if_created(self, info):
        pass


#TODO make this function better. math is awfull.
def in_range(e, self):
    dif1 =e.location.lat-self.location.lat
    dif2 =e.location.long-self.location.long
    if abs(dif1) +abs(dif2) <20:
         return True
    return False


class Target(models.Model):
    target_id = models.AutoField(primary_key=True)
    location = models.ForeignKey("Location")
    image = models.ImageField()
    # home location or garbage location
    type = models.CharField()
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=60)

    # a default ammount currently
    points = models.IntegerField(default=20)

    def create_target(self, loc, info):
        Target.objects.create(self, Location=loc, image=info, points=info,)
        pass

    # returns a list of Targets in range of the current target. maybe.
    def get_in_range(self):

        # returns the other targets in range of this one TODO currently just does it with all home roles
        for e in Target.objects.all():
            if e.type == "Home" and in_range(e, self):
                targList = targList + e
        return targList


    # functionality: if same area is marked by different people can add pictures to the original  target,
    # so no dupes.
    def check_if_created(self):
        for e in Target.objects.all():
            if self.location.lat == e.location.lat and self.location.long == e.location.long:
                # TODO currently only runs when its exactly the same location two targets/same location
                return True
        return False
