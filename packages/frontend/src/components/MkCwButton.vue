<!--
SPDX-FileCopyrightText: syuilo and other misskey contributors
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<button class="_button" :class="$style.root" @mousedown="toggle">
	<b>{{ modelValue ? i18n.ts._cw.hide : i18n.ts._cw.show }}</b>
	<span v-if="!modelValue" :class="$style.label">{{ label }}</span>
</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import * as Misskey from 'misskey-js';
import { concat } from '@/scripts/array.js';
import { i18n } from '@/i18n.js';

const props = defineProps<{
	modelValue: boolean;
	text: string | null;
	renote: Misskey.entities.Note | null;
	files: Misskey.entities.DriveFile[];
	poll?: {
		expiresAt: string | null;
		multiple: boolean;
		choices: {
			isVoted: boolean;
			text: string;
			votes: number;
		}[];
	} | {
		choices: string[];
		multiple: boolean;
		expiresAt: string | null;
		expiredAfter: string | null;
	};
}>();

const emit = defineEmits<{
	(ev: 'update:modelValue', v: boolean): void;
}>();

const label = computed(() => {
	return concat([
		props.text ? [i18n.tsx._cw.chars({ count: props.text.length })] : [],
		props.renote ? [i18n.ts.quote] : [],
		props.files.length !== 0 ? [i18n.tsx._cw.files({ count: props.files.length })] : [],
		props.poll != null ? [i18n.ts.poll] : [],
	] as string[][]).join(' / ');
});

const toggle = () => {
	emit('update:modelValue', !props.modelValue);
};
</script>

<style lang="scss" module>
.root {
	display: inline-block;
	padding: 4px 8px;
	font-size: 0.7em;
	color: var(--cwFg);
	background: var(--cwBg);
	border-radius: 2px;

	&:hover {
		background: var(--cwHoverBg);
	}
}

.label {
	margin-left: 4px;

	&:before {
		content: '(';
	}

	&:after {
		content: ')';
	}
}
</style>
