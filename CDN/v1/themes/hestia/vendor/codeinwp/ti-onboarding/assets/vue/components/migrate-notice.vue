<template>
	<div class="migrate-notice" v-if="Object.keys(this.migrationData).length && !dismissed">
		<a class="migration-dismiss"
				aria-label="Dismiss the migration notice" @click="dismissMigration()">{{ strings.dismiss}}</a>


			<div class="migrate-text">
				<h3>{{migrationData.heading}}</h3>
				<p>{{migrationData.description}}</p>

				<div class="ti-sites-lib">
					<div class="site-box migrate-screenshot">
						<div class="preview-image">
							<img :src="migrationData.screenshot" :alt="migrationData.theme_name">
						</div>
						<div class="footer">
							<h4>{{migrationData.theme_name}}</h4>
						</div>
					</div>
				</div>

				<p class="button-wrapper">
					<button v-if="this.$store.state.migration === 'inactive'" class="button button-hero" @click="runMigration()">
						{{strings.import_btn}} {{migrationData.theme_name}}
					</button>
					<button v-else-if="this.$store.state.migration === 'isRunning'" class="button button-hero">
						<Loader class="loader" :loading-message="strings.importing"></Loader>
					</button>
					<button v-else-if="this.$store.state.migration === 'complete'" class="button button-primary button-hero" @click="redirectToHome()">
						{{strings.go_to_site}}
					</button>
				</p>
			</div>

	</div>
</template>

<script>
	import Loader from './loader.vue'

	export default {
		name: 'migrate-notice',
		data: function() {
			return {
				strings: this.$store.state.strings,
				dismissed: false,
			}
		},
		computed: {
			migrationData: function () {
				return this.$store.state.sitesData.migrate_data
			},
		},
		methods: {
			dismissMigration: function (  ) {
				this.dismissed = true;
				this.$store.dispatch( 'dismissMigration', {
					req: 'Dismiss Migration',
					theme_mod: this.migrationData.theme_mod,
				} )
			},
			runMigration: function () {
				this.$store.state.migration = 'isRunning';
				this.$store.dispatch( 'migrateTemplate', {
					req: 'Migrate Site',
					template: this.migrationData.template,
					template_name: this.migrationData.template_name,
				} );
			},
			redirectToHome: function () {
				window.location.replace( this.$store.state.homeUrl );
			},
		},
		components: {
			Loader
		}
	}
</script>

<style>
	h4 {
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0;
		overflow: hidden;
		max-width: 70%;
		font-size: 15px;
	}

	.site-box {
		border: 1px solid #ccc;
	}

	.site-box:hover .footer .theme-actions {
		display: block;
	}

	.footer {
		position: relative;
		border-top: 1px solid #ccc;
		display: flex;
		padding: 15px;
		flex-wrap: wrap;
		align-items: center;
	}

	.footer .theme-actions {
		display: none;
		position: absolute;
		right: 0;
		padding: 10px 15px;
		background-color: rgba(244, 244, 244, 0.7);
		border-left: 1px solid rgba(0, 0, 0, 0.05);
	}

	.button .updating-message p{
		margin: auto;
	}

	.migration-dismiss{
		cursor: pointer;
	}

	.migration-dismiss:hover:before{
		color: #c00;
	}
</style>