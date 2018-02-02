const Popper = require("popper.js");

Vue.component("popper", {

    delimiters: ["${", "}"],

    props: [
        "template",
        "placement"
    ],

    created()
    {
        this.$options.template = this.template;
    },

    mounted()
	{
        this.$nextTick(() =>
        {
            this.popper = new Popper(this.$refs.trigger, this.$refs.node, {
                placement: this.placement,
                modifiers: {
                    arrow: {
                        element: this.$refs.arrow
                    }
                }
            });
        });
    },

    data: function()
    {
        return {
            isVisible: false,
            popper: null
        };
    },

    methods:
    {
        togglePopper()
		{
            this.isVisible = !this.isVisible;

            this.popper.scheduleUpdate();
        }
    }
});
