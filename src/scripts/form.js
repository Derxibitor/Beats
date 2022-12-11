$(
    () => {
    const validateFields = (form, fieldsArray) => {
        fieldsArray.forEach((field) => {
            field.removeClass("input-error")
            if (field.val().trim() == "") {
                field.addClass("input-error")
            }
        })

        const errorFields = form.find(".input-error")

        return errorFields.length == 0;
    }

    $(".form").submit(e => {
        e.preventDefault();

        const form = $(e.target)
        const name = form.find("[name='name']")
        const phone = form.find("[name='phone']")
        const comment = form.find("[name='comment']")
        const to = form.find("[name='to']")

        const isValid = validateFields(form, [name, phone, comment, to])

        const modal = $("#modal")
        const content = modal.find(".modal__content")

        modal.removeClass("error-modal")

        if (isValid) {
            const request = $.ajax({
                url: "https://webdev-api.loftschool.com/sendmail",
                method: "post",
                data: {
                    name: name.val(),
                    phone: phone.val(),
                    comment: comment.val(),
                    to: to.val()
                }
            })

            request.done((data) => {
                content.text(data.message)
            })

            request.fail((data) => {
                if (data.responseJSON) {
                    content.text(data.responseJSON.massage)
                }   else {
                    content.text('Произошла ошибка, попробуйте снова')
                }
                modal.addClass("error-modal")
            })

            request.always(() => {
                $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                })
            })
        }
    })

    $(".app-submit-btn").click(e => {
        e.preventDefault();

        $.fancybox.close();
    })
})