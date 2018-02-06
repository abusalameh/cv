<template>
	<v-flex xs12 sm6 md6 lg4 xl4  offset-sm3 offset-md3 offset-lg4 offset-xl4 align-center align-content-center class="pt-5"> 
		<v-card hover class="pa-5">
			<!-- <v-card-media contain src="public/logo.svg" height="200px"></v-card-media> -->
			<v-card-title primary-title>
				<div class="full-width text-xs-center">
					<div class="pb-3">
						<v-avatar size="240px">
			              <img src="https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/22195517_1553703934688216_6281414092588736917_n.jpg?oh=3c3ff8def6991970c169e0141b9ddb18&oe=5B1FF3FD" >
			            </v-avatar>
		            </div>
		            <div>
		            	<h4 class="display-1 mt-2 grey--text text--darken-2 ">Raja Abu Salameh</h4>
		            	<p class="subheading mt-2 pink--text text--darken-4 ">Frontend Developer</p>	
		            </div>
				</div>
			</v-card-title>
			<v-container fluid>
	            <v-layout row wrap>
			        <v-flex xs12 >
			        	<p class="text-xs-center">
							<v-btn router :to="{name:'frontend'}" flat class="indigo--text">
								see more  
								<v-icon dark right>keyboard_arrow_right</v-icon>
							</v-btn>
			        	</p>
					</v-flex>
            	</v-layout>
            	
          	</v-container>
          	<v-footer class="white">
          		<v-layout row wrap>
			        <v-flex xs12 >
			        	<p class="text-xs-center body-2 pt-5">
							Made with <span class="red--text love">♥</span> by Vuejs
			        	</p>
					</v-flex>
            	</v-layout>
            		
        	</v-footer>	
		</v-card>
	</v-flex>
</template>

<script>
export default {

  name: 'Welcome',

  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
.full-width {
	width:100%;
}

</style>