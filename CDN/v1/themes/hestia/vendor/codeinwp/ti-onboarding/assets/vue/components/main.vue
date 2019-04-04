<template>
	<div :class="{ 'is__onboarding' : this.$store.state.onboard === 'yes' && ! previewOpen } ">

		<div :class="! isLoading ? 'library-wrapper' : '' ">
			<Loader v-if="isLoading" :loading-message="loadingString"></Loader>
			<template v-else>
				<template v-if="this.$store.state.onboard === 'yes'">
					<div class="header" v-if="containsKey(themeStrings,'onboard_header') || containsKey(themeStrings,'onboard_description')">
						<h1 v-if="containsKey(themeStrings,'onboard_header')">
							{{themeStrings.onboard_header}}</h1>
						<p v-if="containsKey(themeStrings,'onboard_description')">
							{{themeStrings.onboard_description}}</p>
					</div>
				</template>
				<MigrateNotice></MigrateNotice>
				<template v-if="Object.keys(themeStrings).length">
				<h3 v-if="containsKey(themeStrings, 'templates_title')">{{themeStrings.templates_title}}</h3>
				<p v-if="containsKey(themeStrings, 'templates_description')">{{themeStrings.templates_description}}</p>
				</template>
				<div class="ti-sites-lib">
					<default-item v-if="this.$store.state.sitesData.default_template"></default-item>
					<div v-for="site in sites.local">
						<SiteItem :site_data="site"></SiteItem>
					</div>
					<div v-for="site in sites.remote">
						<SiteItem :site_data="site"></SiteItem>
					</div>
					<div v-for="site in sites.upsell">
						<SiteItem :site_data="site"></SiteItem>
					</div>
					<Preview v-if="previewOpen"></Preview>
				</div>
			</template>
		</div>
		<div class="skip-wrap" v-if="this.$store.state.onboard === 'yes' && ! isLoading">
			<a @click="cancelOnboarding" class="skip-onboarding button button-primary">
				{{strings.later}}
			</a>
		</div>
		<import-modal v-if="modalOpen">
		</import-modal>
	</div>
</template>

<script>
	import Loader from './loader.vue'
	import SiteItem from './site-item.vue'
	import Preview from './preview.vue'
	import ImportModal from './import-modal.vue'
	import MigrateNotice from './migrate-notice.vue'
	import DefaultItem from './default-item.vue'

	module.exports = {
		name: 'app',
		data: function () {
			return {
				strings: this.$store.state.strings,
			}
		},
		computed: {
			isLoading: function () {
				return this.$store.state.ajaxLoader
			},
			sites: function () {
				return this.$store.state.sitesData
			},
			previewOpen: function () {
				return this.$store.state.previewOpen
			},
			loadingString: function () {
				return this.$store.state.strings.loading;
			},
			modalOpen: function () {
				return this.$store.state.importModalState
			},
			themeStrings: function () {
				return this.$store.state.sitesData.i18n
			}
		},
		methods: {
			cancelOnboarding: function () {
				window.location.replace( this.$store.state.aboutUrl );
			},
			containsKey( obj, key ) {
				return Object.keys( obj ).includes( key );
			},
		},
		components: {
			Loader,
			SiteItem,
			Preview,
			ImportModal,
			MigrateNotice,
			DefaultItem,
		},
	}
</script>