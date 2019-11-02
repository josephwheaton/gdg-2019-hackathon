from django.db import models


class Location(models.Model):
    location_id = models.AutoField(primary_key=True)
    # max length is arb. currently
    lat = models.FloatField()
    long = models.FloatField()
    name = models.CharField(max_length=50)

    def create_Location(self, latitude, longitude):
        Location.objects.create(self, Lat=latitude, long=longitude)

    def check_if_created(self, info):
        pass


class Target(models.Model):
    target_id = models.AutoField(primary_key=True)
    location = models.ForeignKey("Location")
    image = models.ImageField()

    # time this target started
    startTime = models.DateTimeField()
    # a default ammount currently
    points = models.IntegerField(default=20)

    def create_target(self, loc, info):
        Target.objects.create(self, Location=loc, image=info, points=info,)
        pass

    # functionality: if same area is marked by different people can add pictures to the original  target,
    # so no dupes.
    def check_if_created(self):
        for e in Target.objects.all():
            if self.location.lat == e.location.lat and self.location.long == e.location.long:
                # TODO currently only runs when its exactly the same location two targets/same location
                return True
        return False
