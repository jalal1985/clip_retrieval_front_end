<template>
    <main class="w-full flex justify-center ">
        <div class="container">
            <div class="w-full flex justify-center mt-5 mb-2">
                Style recommendation platform powered by
            </div>

            <div class="w-full flex justify-center mt-5 mb-2">
                AI
            </div>

            <div class="w-full flex justify-center mt-5 mb-10">
                Enhance your wardrobe
            </div>

            <div class="w-full flex justify-center">
                <FormButton
                    :class="'text-sm'"
                >
                    <LinkInternal
                        :title="'Get started'"
                        :url="'/models'"
                        :class="'px-60px py-2 text-white no-underline'"
                    />
                </FormButton>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">

</script>
