<script setup>
import { pwaInfo } from 'virtual:pwa-info'
import { useHead } from '#imports'

/*
  This IIFE will run only in production mode. Exposing the manifest link in the head.
  As well as other PWA related meta tags.
  */
;(async () => {
  if (pwaInfo) {
    const meta = ref({ link: [] })
    useHead(meta)
    const { webManifest } = pwaInfo
    if (webManifest) {
      const { href, useCredentials } = webManifest
      if (useCredentials) {
        meta.value.link.push({
          rel: 'manifest',
          href,
          crossorigin: 'use-credentials'
        })
      } else {
        meta.value.link.push({
          rel: 'manifest',
          href
        })
      }
    }
  }
  return () => null
})()
</script>

<template>
  <div class="flex h-screen min-h-full flex-col overflow-scroll">
    <NuxtLayout>
      <NuxtPage /> </NuxtLayout
    > 
  </div>
</template>
