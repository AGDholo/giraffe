<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4">Popular Posts</h3>

      <v-divider></v-divider>

      <div>
        <v-row v-for="i in 5" :key="i" class="py-2">
          <v-col cols="12" md="6" lg="5">
            <v-card height="100%" flat>
              <v-img
                src="https://cdn.pixabay.com/photo/2021/01/22/16/55/camera-5940588_1280.jpg"
                :aspect-ratio="16 / 9"
                height="100%"
              ></v-img>
            </v-card>
          </v-col>

          <v-col>
            <div>
              <v-btn depressed color="accent" small>TRAVEL</v-btn>

              <h3 class="text-h6 font-weight-bold primary--text py-3">
                What do | need to know to start learning JavaScript?
              </h3>

              <div class="d-flex align-center">
                <v-avatar color="accent" size="24">
                  <v-icon dark small>mdi-feather</v-icon>
                </v-avatar>

                <div class="pl-2">Yan Lee · 03 Jan 2019</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Category</h3>

      <v-divider></v-divider>

      <v-card color="accent" dark flat v-for="i in 5" :key="i" class="my-4">
        <v-card-text
          class="d-flex justify-space-between align-center white--text"
        >
          <h6 class="text-h6">Travel</h6>

          <div class="text-h6">47</div>
        </v-card-text>
      </v-card>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Top Authors</h3>

      <v-divider></v-divider>

      <div class="pt-4">
        <div class="d-flex align-center mb-6" v-for="i in 5" :key="i">
          <v-avatar color="accent" size="64">
            <v-icon dark x-large>mdi-feather</v-icon>
          </v-avatar>

          <div class="pl-2">
            <div class="text-h6">Yan Lee</div>
            <div class="text-subtitle-1">47 Articles</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Tags</h3>

      <v-divider></v-divider>

      <v-row class="pt-4">
        <v-col v-for="i in 7" :key="i" class="flex-shrink-0" cols="auto">
          <v-chip color="accent">#Images</v-chip>
        </v-col>
      </v-row>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Newsletter</h3>

      <v-divider></v-divider>

      <v-text-field
        label="Your email adress"
        solo
        type="email"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
      <v-btn color="accent" block large>Subscrbe</v-btn>
    </div>
  </div>
</template>
