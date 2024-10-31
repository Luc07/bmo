import '@/setup';
import app from '@/app';

app.listen(process.env.PORT || 4000, () => {
    console.log(
        `${process.env.NODE_ENV} server is listening ${process.env.PORT || 4000}`
    );
});