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

    def add_points(self, target_completed):
        self.redeemable_points = self.redeemable_points + target_completed.points
        # TODO should eliminate the target after completion. Maybe not in this method


class Location(models.Model):
    location_id = models.AutoField(primary_key=True)
    # max length is arb. currently
    lat = models.FloatField()
    long = models.FloatField()

    def create_Location(self, latitude, longitude):
        Location.objects.create(self, Lat=latitude, long=longitude)

    def check_if_created(self, info):
        pass


# TODO make this function better. math is awfull.
def in_range(e, self):
    dif1 = e.location.lat-self.location.lat
    dif2 = e.location.long-self.location.long
    if abs(dif1) + abs(dif2) < 20:
        return True
    return False


class Target(models.Model):
    target_id = models.AutoField(primary_key=True)
    #location = models.ForeignKey("Location")
    image = models.ImageField()
    # home location or garbage location
    type = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=60)

    # a default amount currently
    points = models.IntegerField(default=20)

    def create_target(self, loc, info):
        #Target.objects.create(self, Location=loc, image=info, points=info,)
        pass

    # returns a list of Targets in range of the current target. maybe.
    def get_in_range(self):

        # returns the other targets in range of this one TODO currently just does it with all home roles
        for e in Target.objects.all():
            if e.type == "Home" and in_range(e, self):
                targ_list = targ_list + e
        return targ_list

    # functionality: if same area is marked by different people can add pictures to the original  target,
    # so no dupes.
    def check_if_created(self):
        for e in Target.objects.all():
            if self.location.lat == e.location.lat and self.location.long == e.location.long:
                # TODO currently only runs when its exactly the same location two targets/same location
                return True
        return False
