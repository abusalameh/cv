<template>
	<v-flex xs12 sm6 md6 lg4 xl4  offset-sm3 offset-md3 offset-lg4 offset-xl4 align-center align-content-center class="pt-5"> 
		<v-card hover class="pa-5">
			<!-- <v-card-media contain src="public/logo.svg" height="200px"></v-card-media> -->
			<v-card-title primary-title>
				<div class="full-width text-xs-center">
		            <div>
		            	<h4 class="display-1 mt-2 grey--text text--darken-2 pb-4">SKILLS</h4>
		            	<img style="width:128px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MDMuNjggNTAzLjY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDMuNjggNTAzLjY4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEN0Q3OyIgZD0iTTI1MC44NCwzMjcuNzQ2YzUuMTIsMCw4LjUzMyw0LjI2Nyw4LjUzMyw4LjUzM3MtMy40MTMsOC41MzMtOC41MzMsOC41MzNzLTguNTMzLTQuMjY3LTguNTMzLTguNTMzICAgUzI0NS43MiwzMjcuNzQ2LDI1MC44NCwzMjcuNzQ2TDI1MC44NCwzMjcuNzQ2eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0YyRUREQTsiIGQ9Ik00OTguMzA3LDM3LjYxM3YyNTZIMzc4Ljg0VjcxLjc0NkwzMzYuMTczLDMuNDhoMTI4QzQ4MS4yNCwzLjQ4LDQ5OC4zMDcsMjAuNTQ2LDQ5OC4zMDcsMzcuNjEzeiAgICBNMTIyLjg0LDI1OS40OHYzNC4xMzNIMy4zNzN2LTI1NkMzLjM3MywyMC41NDYsMjAuNDQsMy40OCwzNy41MDcsMy40OGg1MS4yaDM0LjEzM3Y1MS4ydjM0LjEzM3YzNC4xMzN2MzQuMTMzdjM0LjEzM3YzNC4xMzMgICBWMjU5LjQ4eiBNMzM2LjE3MywzLjQ4bC00Mi42NjcsNjguMjY3djIyMS44NjdoLTM0LjEzM1YzLjQ4SDMzNi4xNzN6Ii8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRUNGNEY3OyIgcG9pbnRzPSIzMzYuMTczLDMuNDggMzc4Ljg0LDcxLjc0NiAyOTMuNTA3LDcxLjc0NiAgIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojODBENkZBOyIgcG9pbnRzPSIzMzYuMTczLDI5My42MTMgMjkzLjUwNywyOTMuNjEzIDI5My41MDcsNzEuNzQ2IDM3OC44NCw3MS43NDYgMzc4Ljg0LDI5My42MTMgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VDRjRGNzsiIHBvaW50cz0iMjA4LjE3Myw0NDcuMjEzIDI5My41MDcsNDQ3LjIxMyAyOTMuNTA3LDM3OC45NDcgMjA4LjE3MywzNzguOTQ3ICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkUwNzk7IiBwb2ludHM9IjEyMi44NCwyMjUuMzQ2IDEyMi44NCwxOTEuMjEzIDEyMi44NCwxNTcuMDggMTIyLjg0LDEyMi45NDYgMTIyLjg0LDg4LjgxMyAxMjIuODQsNTQuNjggICAgMTIyLjg0LDMuNDggMjU5LjM3MywzLjQ4IDI1OS4zNzMsMjkzLjYxMyAxMjIuODQsMjkzLjYxMyAxMjIuODQsMjU5LjQ4ICAiLz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNFQ0Y0Rjc7IiBkPSJNNDk4LjMwNywyOTMuNjEzdjUxLjJjMCwxNy4wNjctMTcuMDY3LDM0LjEzMy0zNC4xMzMsMzQuMTMzSDI5My41MDdoLTg1LjMzM0gzNy41MDcgICAgYy0xNy4wNjcsMC0zNC4xMzMtMTcuMDY3LTM0LjEzMy0zNC4xMzN2LTUxLjJIMTIyLjg0aDEzNi41MzNoMzQuMTMzaDQyLjY2N2g0Mi42NjdINDk4LjMwN3oiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRUNGNEY3OyIgZD0iTTQ2NC4xNzMsNDg5Ljg4djguNTMzaC02OC4yNjd2LTguNTMzYzAtMTQuNTA3LDExLjA5My0yNS42LDI1LjYtMjUuNmgxNy4wNjcgICAgQzQ1My4wOCw0NjQuMjgsNDY0LjE3Myw0NzUuMzczLDQ2NC4xNzMsNDg5Ljg4Ii8+Cgk8L2c+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6IzUxNTY1RjsiIGQ9Ik00NjUuMTczLDUwMy42OGgtNjguMjY3Yy0yLjU2LDAtNC4yNjctMS43MDctNC4yNjctNC4yNjd2LTguNTMzICBjMC0xNi4yMTMsMTMuNjUzLTI5Ljg2NywyOS44NjctMjkuODY3aDE3LjA2N2MxNi4yMTMsMCwyOS44NjcsMTMuNjUzLDI5Ljg2NywyOS44Njd2OC41MzMgIEM0NjkuNDQsNTAxLjk3Myw0NjcuNzMzLDUwMy42OCw0NjUuMTczLDUwMy42OHogTTQwMS4xNzMsNDk1LjE0N2g1OS43MzN2LTQuMjY3YzAtMTEuOTQ3LTkuMzg3LTIxLjMzMy0yMS4zMzMtMjEuMzMzaC0xNy4wNjcgIGMtMTEuOTQ3LDAtMjEuMzMzLDkuMzg3LTIxLjMzMywyMS4zMzNWNDk1LjE0N3ogTTM0NS43MDcsNTAzLjY4aC0zMDcuMmMtMi41NiwwLTQuMjY3LTEuNzA3LTQuMjY3LTQuMjY3czEuNzA3LTQuMjY3LDQuMjY3LTQuMjY3ICBoMTIuOHYtMTIuOGMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjdjMi41NiwwLDQuMjY3LDEuNzA3LDQuMjY3LDQuMjY3djEyLjhoMjUuNnYtMTIuOGMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjcgIHM0LjI2NywxLjcwNyw0LjI2Nyw0LjI2N3YxMi44aDI1LjZ2LTEyLjhjMC0yLjU2LDEuNzA3LTQuMjY3LDQuMjY3LTQuMjY3YzIuNTYsMCw0LjI2NywxLjcwNyw0LjI2Nyw0LjI2N3YxMi44aDI1LjZ2LTEyLjggIGMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjdzNC4yNjcsMS43MDcsNC4yNjcsNC4yNjd2MTIuOGgyNS42di0xMi44YzAtMi41NiwxLjcwNy00LjI2Nyw0LjI2Ny00LjI2N3M0LjI2NywxLjcwNyw0LjI2Nyw0LjI2NyAgdjEyLjhoMjUuNnYtMTIuOGMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjdjMi41NiwwLDQuMjY3LDEuNzA3LDQuMjY3LDQuMjY3djEyLjhoMjUuNnYtMTIuOGMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjcgIHM0LjI2NywxLjcwNyw0LjI2Nyw0LjI2N3YxMi44aDI1LjZ2LTEyLjhjMC0yLjU2LDEuNzA3LTQuMjY3LDQuMjY3LTQuMjY3czQuMjY3LDEuNzA3LDQuMjY3LDQuMjY3djEyLjhoMjUuNnYtMTIuOCAgYzAtMi41NiwxLjcwNy00LjI2Nyw0LjI2Ny00LjI2N3M0LjI2NywxLjcwNyw0LjI2Nyw0LjI2N3YxMi44aDEyLjhjMi41NiwwLDQuMjY3LDEuNzA3LDQuMjY3LDQuMjY3UzM0OC4yNjcsNTAzLjY4LDM0NS43MDcsNTAzLjY4eiAgIE0yOTQuNTA3LDQ1Mi40OGMtMi41NiwwLTQuMjY3LTEuNzA3LTQuMjY3LTQuMjY3VjQxNC4wOGMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjdzNC4yNjcsMS43MDcsNC4yNjcsNC4yNjd2MzQuMTMzICBDMjk4Ljc3Myw0NTAuNzczLDI5Ny4wNjcsNDUyLjQ4LDI5NC41MDcsNDUyLjQ4eiBNMjA5LjE3Myw0NTIuNDhjLTIuNTYsMC00LjI2Ny0xLjcwNy00LjI2Ny00LjI2N1Y0MTQuMDggIGMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjdzNC4yNjcsMS43MDcsNC4yNjcsNC4yNjd2MzQuMTMzQzIxMy40NCw0NTAuNzczLDIxMS43MzMsNDUyLjQ4LDIwOS4xNzMsNDUyLjQ4eiBNNDY1LjE3MywzODQuMjEzICBIMzguNTA3Yy0xOS42MjcsMC0zOC40LTE4Ljc3My0zOC40LTM4LjR2LTUxLjJjMC0yLjU2LDEuNzA3LTQuMjY3LDQuMjY3LTQuMjY3aDQ2MC44YzIuNTYsMCw0LjI2NywxLjcwNyw0LjI2Nyw0LjI2NyAgYzAsMi41Ni0xLjcwNyw0LjI2Ny00LjI2Nyw0LjI2N0g4LjY0djQ2LjkzM2MwLDE0LjUwNywxNS4zNiwyOS44NjcsMjkuODY3LDI5Ljg2N2g0MjYuNjY3YzE0LjUwNywwLDI5Ljg2Ny0xNS4zNiwyOS44NjctMjkuODY3ICB2LTMwNy4yYzAtMTQuNTA3LTE1LjM2LTI5Ljg2Ny0yOS44NjctMjkuODY3SDM3OS44NGMtMi41NiwwLTQuMjY3LTEuNzA3LTQuMjY3LTQuMjY3czEuNzA3LTQuMjY3LDQuMjY3LTQuMjY3aDg1LjMzMyAgYzE5LjYyNywwLDM4LjQsMTguNzczLDM4LjQsMzguNHYzMDcuMkM1MDMuNTczLDM2NS40NCw0ODQuOCwzODQuMjEzLDQ2NS4xNzMsMzg0LjIxM3ogTTI1MS44NCwzNTAuMDggIGMtNi44MjcsMC0xMi44LTUuOTczLTEyLjgtMTIuOGMwLTYuODI3LDUuOTczLTEyLjgsMTIuOC0xMi44YzYuODI3LDAsMTIuOCw1Ljk3MywxMi44LDEyLjggIEMyNjQuNjQsMzQ0LjEwNiwyNTguNjY3LDM1MC4wOCwyNTEuODQsMzUwLjA4eiBNMjUxLjg0LDMzMy4wMTNjLTIuNTYsMC00LjI2NywxLjcwNy00LjI2Nyw0LjI2N2MwLDIuNTYsMS43MDcsNC4yNjcsNC4yNjcsNC4yNjcgIHM0LjI2Ny0xLjcwNyw0LjI2Ny00LjI2N0MyNTYuMTA3LDMzNC43MiwyNTQuNCwzMzMuMDEzLDI1MS44NCwzMzMuMDEzeiBNMzc5Ljg0LDI2NC43NDZjLTIuNTYsMC00LjI2Ny0xLjcwNy00LjI2Ny00LjI2N3YtMTUzLjYgIGMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjdzNC4yNjcsMS43MDcsNC4yNjcsNC4yNjd2MTUzLjZDMzg0LjEwNywyNjMuMDQsMzgyLjQsMjY0Ljc0NiwzNzkuODQsMjY0Ljc0NnogTTMzNy4xNzMsMjY0Ljc0NiAgYy0yLjU2LDAtNC4yNjctMS43MDctNC4yNjctNC4yNjd2LTE1My42YzAtMi41NiwxLjcwNy00LjI2Nyw0LjI2Ny00LjI2N3M0LjI2NywxLjcwNyw0LjI2Nyw0LjI2N3YxNTMuNiAgQzM0MS40NCwyNjMuMDQsMzM5LjczMywyNjQuNzQ2LDMzNy4xNzMsMjY0Ljc0NnogTTI5NC41MDcsMjY0Ljc0NmMtMi41NiwwLTQuMjY3LTEuNzA3LTQuMjY3LTQuMjY3VjcyLjc0NiAgYzAtMC44NTMsMC0xLjcwNywwLjg1My0yLjU2TDMzMy43NiwxLjkyYzEuNzA3LTIuNTYsNS45NzMtMi41Niw2LjgyNywwbDQyLjY2Nyw2OC4yNjdjMC44NTMsMS43MDcsMC44NTMsMi41NiwwLDQuMjY3ICBjLTAuODUzLDEuNzA3LTIuNTYsMi41Ni0zLjQxMywyLjU2aC01MS4yYy0yLjU2LDAtNC4yNjctMS43MDctNC4yNjctNC4yNjdjMC0yLjU2LDEuNzA3LTQuMjY3LDQuMjY3LTQuMjY3aDQzLjUybC0zNC45ODctNTYuMzIgIGwtMzguNCw2MS40NHYxODYuODhDMjk4Ljc3MywyNjMuMDQsMjk3LjA2NywyNjQuNzQ2LDI5NC41MDcsMjY0Ljc0NnogTTI2MC4zNzMsMjY0Ljc0NmMtMi41NiwwLTQuMjY3LTEuNzA3LTQuMjY3LTQuMjY3VjguNzQ2aC0xMjggIHY0Mi42NjdoNDYuOTMzYzIuNTYsMCw0LjI2NywxLjcwNyw0LjI2Nyw0LjI2N3MtMS43MDcsNC4yNjctNC4yNjcsNC4yNjdoLTQ2LjkzM3YyNS42aDEyLjhjMi41NiwwLDQuMjY3LDEuNzA3LDQuMjY3LDQuMjY3ICBzLTEuNzA3LDQuMjY3LTQuMjY3LDQuMjY3aC0xMi44djI1LjZoMTIuOGMyLjU2LDAsNC4yNjcsMS43MDcsNC4yNjcsNC4yNjdjMCwyLjU2LTEuNzA3LDQuMjY3LTQuMjY3LDQuMjY3aC0xMi44djI1LjZoNDYuOTMzICBjMi41NiwwLDQuMjY3LDEuNzA3LDQuMjY3LDQuMjY3YzAsMi41Ni0xLjcwNyw0LjI2Ny00LjI2Nyw0LjI2N2gtNDYuOTMzdjI1LjZoMTIuOGMyLjU2LDAsNC4yNjcsMS43MDcsNC4yNjcsNC4yNjcgIGMwLDIuNTYtMS43MDcsNC4yNjctNC4yNjcsNC4yNjdoLTEyLjh2MjUuNmgxMi44YzIuNTYsMCw0LjI2NywxLjcwNyw0LjI2Nyw0LjI2N3MtMS43MDcsNC4yNjctNC4yNjcsNC4yNjdoLTEyLjh2MjkuODY3ICBjMCwyLjU2LTEuNzA3LDQuMjY3LTQuMjY3LDQuMjY3Yy0yLjU2LDAtNC4yNjctMS43MDctNC4yNjctNC4yNjd2LTI1NmMwLTIuNTYsMS43MDctNC4yNjcsNC4yNjctNC4yNjdoMTM2LjUzMyAgYzIuNTYsMCw0LjI2NywxLjcwNyw0LjI2Nyw0LjI2N3YyNTZDMjY0LjY0LDI2My4wNCwyNjIuOTMzLDI2NC43NDYsMjYwLjM3MywyNjQuNzQ2eiBNNC4zNzMsMjY0Ljc0NiAgYy0yLjU2LDAtNC4yNjctMS43MDctNC4yNjctNC4yNjdWMzguNjEzYzAtMTkuNjI3LDE4Ljc3My0zOC40LDM4LjQtMzguNGg1MS4yYzIuNTYsMCw0LjI2NywxLjcwNyw0LjI2Nyw0LjI2NyAgcy0xLjcwNyw0LjI2Ny00LjI2Nyw0LjI2N2gtNTEuMkMyNCw4Ljc0Niw4LjY0LDI0LjEwNiw4LjY0LDM4LjYxM1YyNjAuNDhDOC42NCwyNjMuMDQsNi45MzMsMjY0Ljc0Niw0LjM3MywyNjQuNzQ2eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
		            	
		            	<v-spacer></v-spacer>	
		            </div>
				</div>
			</v-card-title>
			<v-container fluid>
	            <v-layout row wrap>
			        <v-flex xs12 >
			        	<div>
			        		<h4 class="headline">Some Frontend Skills</h4>
			        		<v-list three-line>
					          <template v-for="item in frontend">
					            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
					            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
					            <v-list-tile avatar v-else v-bind:key="item.title" @click="">
					              <v-list-tile-avatar>
					                <img v-bind:src="item.avatar"/>
					              </v-list-tile-avatar>
					              <v-list-tile-content>
					                <v-list-tile-title v-html="item.title"></v-list-tile-title>
					                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
					              </v-list-tile-content>
					            </v-list-tile>
					          </template>
					        </v-list>
			        	</div>
					</v-flex>
					<v-flex xs12 class="pt-5">
			        	<p class="text-xs-center">
			        		<v-btn router :to="{name:'welcome'}" flat class="indigo--text">
			        			<v-icon dark left>keyboard_arrow_left</v-icon> Back
			        		</v-btn>
							<v-btn router :to="{name:'backend'}" flat class="indigo--text">
							next <v-icon dark right>keyboard_arrow_right</v-icon>
							</v-btn>
			        	</p>
					</v-flex>
            	</v-layout>
            	<v-footer class="white">
          		<v-layout row wrap>
			        <v-flex xs12 >
			        	<p class="text-xs-center body-2 pt-5">
							Made with <span class="red--text love">♥</span> by Vuejs
			        	</p>
					</v-flex>
            	</v-layout>
            		
        	</v-footer>	
          	</v-container>
		</v-card>
	</v-flex>
</template>

<script>
export default {

  name: 'Welcome',

  data () {
    return {
    	frontend:[
	      	{ avatar: 'https://raw.githubusercontent.com/vuejs/art/master/logo.png', title: 'Vue.js', subtitle: "I've a good experience with vue-js building SPA's using vue, vue-router and vuex." },
	      { divider: true, inset: true },
	      { avatar: 'https://angular.io/assets/images/logos/angular/angular.png', title: 'Angular JS', subtitle: "very popular javascript framework by Google, helps in building great web apps. I've worked with this framework while working at TDM Systems in Online-Exam App." },
	      { divider: true, inset: true },
	      { avatar: 'https://getbootstrap.com/assets/img/bootstrap-stack.png', title: 'Twitter Bootstrap', subtitle: "Very well known css-framework with it's ready and easy to user components, and its great grid-system. I like it." },
	      { divider: true, inset: true },
	      { avatar: 'https://pbs.twimg.com/profile_images/895274026783866881/E1G1nNb0.jpg', title: 'Tailwind CSS', subtitle: "Modern Utility css framework, which helps you to massivly build rappid web components withiout the need to write down any line of css." },
	      { divider: true, inset: true },
    	],
    }
  }
}
</script>

<style lang="css" scoped>
.full-width {
	width:100%;
}
</style>