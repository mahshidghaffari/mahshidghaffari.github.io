<template>
    <div class="dropdown" ref="dropdownRef" @mouseout="closeDropdown">
        <div class="dropdown-toggle" @mouseover="openDropdown">
            <img :src="selectedOption.image" class="dropdown-option-image" />
            <span class="dropdown-option-label">{{ selectedOption.name }}</span>
            <span class="dropdown-caret"></span>
        </div>
        <ul class="dropdown-menu" v-show="isDropdownOpen" @mouseover="cancelCloseDropdown" @mouseout="closeDropdown">
            <li v-for="option in SUPPORTED_LANG" :key="option.code" @click="selectOption(option)" :class="{ selected: option.code === selectedOption.code }">
                <img :src="option.image" class="dropdown-option-image" />
                <span class="dropdown-option-label">{{ option.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent ,computed, ref} from 'vue';
import { SUPPORTED_LANG } from "@/composables/constants";
import {mapActions, useStore} from 'vuex';

interface optionType {
    name: string;
    code: string;
    image: string;
}

export default defineComponent({
    data() {
        return {
            isDropdownOpen: false,
        };
    },
    setup() {
        const store = useStore();

        const currentLanguage = computed(() => store.getters['util/currentLang']);

        const selectedLanguage = ref(currentLanguage.value);
        const selectedOption = SUPPORTED_LANG.find((lang) => lang.code === selectedLanguage.value);

        return {
            selectedOption,
            SUPPORTED_LANG
        };
    },
    methods: {
        ...mapActions('util', ['setLang']),
        openDropdown() {
            this.isDropdownOpen = true;
        },
        closeDropdown() {
            this.isDropdownOpen = false;
        },
        cancelCloseDropdown() {
            // Cancel the closing of dropdown when user hovers over the dropdown menu
            this.isDropdownOpen = true;
        },
        selectOption(option: optionType) {
            this.setLang(option.code);
            this.closeDropdown();
            this.selectedOption = option;
        },
        handleClickOutside(event: MouseEvent) {
            if (
                this.$refs.dropdownRef &&
                !(this.$refs.dropdownRef as HTMLElement).contains(event.target as Node)
            ) {
                this.closeDropdown();
            }
        },
    },
    mounted() {
        // Add click event listener to the window
        window.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        // Remove the click event listener when the component is about to be unmounted
        window.removeEventListener('click', this.handleClickOutside);
    },
});
</script>
<style scoped>
/* General styles */
* {
    box-sizing: border-box;
    font-family: sans-serif;
}

/* Dropdown styles */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: transparent;
    cursor: pointer;
    user-select: none;
    border-radius: 8px;
}

.dropdown-toggle:hover {
    background-color: #5E56A5;
}

.dropdown-option-image {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    border-radius: 50%;
}

.dropdown-option-label {
    color: #31394D;
    flex-grow: 1;
}

.dropdown-caret {
    display: inline-block;
    margin-left: 12px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 8px 0 8px;
    border-color: #31394D transparent transparent transparent;
}

.dropdown-menu {
    position: absolute;
    top: 125%;
    left: 5%;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 1px solid #5E56A5;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    list-style: none;
    z-index: 1;
    transform: translateY(-12px);
    transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
    max-height: 200px;
    width: 160px;
    overflow-y: auto;
}

.dropdown-menu li {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.dropdown-menu li:hover {
    background-color: #5E56A5;
}

.dropdown-menu li .dropdown-option-image {
    margin-right: 12px;
}

.dropdown-menu li .dropdown-option-label {
    flex-grow: 1;
}
/* Style for selected option */
.dropdown-menu li.selected {
    background-color: #5E56A5;
    color: white;
}
</style>