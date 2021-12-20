# Install steps 

- env is already configured just create a DB by <code>infinite_loop_error</code>
- run migration's with seed <code>php artisan migrate --seed</code> it will seed 10 users to DB
- go to <code>/users</code> route to check the error and 
- try visiting from <code>/</code> route via the btn ( this works but after reloading the <code>/users</code> route it goes on infinite loop )
