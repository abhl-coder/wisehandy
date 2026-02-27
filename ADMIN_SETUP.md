# Admin Setup (Supabase + Wise Handy CMS)

## 1) Create database tables
Run the SQL in `db/schema.sql` inside your Supabase SQL editor.

## 2) Create the first admin user
Generate a password hash locally:

```bash
node -e "console.log(require('bcryptjs').hashSync('YOUR_PASSWORD', 10))"
```

Then insert:

```sql
insert into users (email, password_hash, role)
values ('you@yourdomain.com', 'HASH_FROM_STEP_2', 'owner');
```

## 3) Set environment variables
Fill these in `.env.local`:
- `DATABASE_URL`
- `DIRECT_URL`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SESSION_SECRET`

To send the same values to Vercel (once filled), run:

```bash
vercel env add DATABASE_URL production < .env.local
vercel env add DIRECT_URL production < .env.local
vercel env add SUPABASE_URL production < .env.local
vercel env add SUPABASE_ANON_KEY production < .env.local
vercel env add SUPABASE_SERVICE_ROLE_KEY production < .env.local
vercel env add SESSION_SECRET production < .env.local
```

## 4) Login
Visit `/admin/login` and sign in with the user you created.
