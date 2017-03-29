<template>
    <div class="card">
        <div class="card-head grey lighten-4">
            <p>{{keep.author}}</p>
        </div>
        <div class="card-body">
            <p>{{keep.body}}</p>
        </div>
        <div class="card-title">
            <p>{{keep.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'keep',
    props: ['keep'],
    data() {
        return {

        }
    },
    computed: {
        
    }
}