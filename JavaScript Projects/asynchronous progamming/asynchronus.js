const fun2 = () => {
    setTimeout(() => {
        console.log('This is Second function')
    }, 2000);
    }

const fun1 = () => {
    console.log('This is First function')
    fun2();
    console.log('This is again First function')
};

fun1()