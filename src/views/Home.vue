<template>
  <div>
    <div>
      <v-card >
        <v-img
          src="https://cdn.pixabay.com/photo/2016/02/13/13/11/cuba-1197800_1280.jpg"
          gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
          :aspect-ratio="16 / 9"
          height="500px"
          dark
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col>
                <v-btn color="accent" >Travel</v-btn>
              </v-col>
              <v-col cols="12" md="10" lg="8" xl="7">
                <h2
                  class="text-h3 py-3"
                  style="line-height: 1.2"
                >Great Travel Blogs From Around The World To Inspire You</h2>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-icon large color>mdi-feather</v-icon>
                </v-avatar>

                <div class="text-h6 pl-2">Yan Lee · 22 July 2019</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </div>

    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Recommended For You</h2>

            <v-row>
              <v-col cols="12" md="6" lg="4" v-for="i in 6" :key="i">
                <v-card flat >
                  <v-img
                    src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_1280.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="200px"
                    class="elevation-2"
                  >
                    <v-card-text>
                      <v-btn color="accent" >TIPS</v-btn>
                    </v-card-text>
                  </v-img>
                </v-card>

                <v-card flat >
                  <v-card-text>
                    <div class="text-h5 font-weight-bold primary--text">
                      How to write an awesome blog
                      post in 5 steps
                    </div>

                    <div class="text-body-1 py-4">
                      Ultrices sagittis orci a scelerisque. Massa
                      placerat duis ultricies lacus sed turpis
                    </div>

                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="36">
                        <v-icon dark>mdi-feather</v-icon>
                      </v-avatar>

                      <div class="pl-2">Yan Lee · 22 July 2019</div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Featured</h2>

            <v-row>
              <v-col cols="6" lg="4" v-for="i in 3" :key="i">
                <v-card flat  dark>
                  <v-img
                    src="https://cdn.pixabay.com/photo/2019/10/29/14/46/landscape-4587079_1280.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="600px"
                    class="elevation-2 fill-height"
                  >
                    <div class="d-flex flex-column justify-space-between fill-height">
                      <v-card-text>
                        <v-btn color="accent" >ANIMALS</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div class="text-h5 py-3 font-weight-bold" style="line-height: 1.2">
                          15 things I have always
                          wondered about birds
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Yan Lee · 03 Jan 2019</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold">Latest Posts</h2>

            <div>
              <v-row v-for="i in 6" :key="i" class="py-4">
                <v-col cols="12" md="4">
                  <v-card flat  height="100%">
                    <v-img
                      src="https://cdn.pixabay.com/photo/2020/07/04/06/34/mother-and-child-5368416_1280.jpg"
                      :aspect-ratio="16 / 9"
                      height="100%"
                    ></v-img>
                  </v-card>
                </v-col>

                <v-col>
                  <div>
                    <v-btn depressed  color="accent">TRAVEL</v-btn>

                    <h3 class="text-h4 font-weight-bold pt-3">
                      Ut enim blandit volutpat maecenas volutpat
                      blandit
                    </h3>

                    <p class="text-h6 font-weight-regular pt-3 text--secondary">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="36">
                        <v-icon dark>mdi-feather</v-icon>
                      </v-avatar>

                      <div class="pl-2">Yan Lee · 03 Jan 2019</div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <div>
            <h3 class="text-h5 font-weight-medium pb-4">Popular Posts</h3>

            <v-divider></v-divider>

            <div>
              <v-row v-for="i in 5" :key="i" class="py-4">
                <v-col cols="12" md="6" lg="5">
                  <v-card height="100%"  flat>
                    <v-img
                      src="https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_1280.jpg"
                      :aspect-ratio="16 / 9"
                      height="100%"
                    ></v-img>
                  </v-card>
                </v-col>

                <v-col>
                  <div>
                    <v-btn depressed  color="accent" small>TRAVEL</v-btn>

                    <h3 class="text-h6 font-weight-bold primary--text py-3">
                      What do | need to know to
                      start learning JavaScript?
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
              <v-card-text class="d-flex justify-space-between align-center white--text">
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

            <v-row>
              <v-col v-for="i in 7" :key="i" class="flex-shrink-0" cols="auto">
                <v-chip color="accent">#Images</v-chip>
              </v-col>
            </v-row>
          </div>

          <div class="pt-4">
            <h3 class="text-h5 font-weight-medium pb-4">Newsletter</h3>

            <v-divider></v-divider>

            <v-text-field label="Your email adress" solo type="email" outlined flat class="pt-4"></v-text-field>
            <v-btn color="accent" block large>Subscrbe</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
