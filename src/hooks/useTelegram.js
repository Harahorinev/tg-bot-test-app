const TG = window.Telegram.WebApp

export function useTelegram () {
    const onClose = () => {
        TG.close()
    }

    const onToggleButton = () => {
        if (TG.MainButton.isVisible) {
            TG.MainButton.hide()
        } else {
            TG.MainButton.show()
        }
    }

    return {
        onClose,
        onToggleButton,
        TG,
        user: TG.initDataUnsafe?.user
    }
}
