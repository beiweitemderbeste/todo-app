# supabase notes

## sql queries

creating todos table:

CREATE TABLE todos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT CHECK (LENGTH(title) >= 4 AND LENGTH(title) <= 20 AND title !~ '^\s*$'),
  is_completed BOOLEAN DEFAULT false
);

adding sample data:

INSERT INTO todos (title) VALUES ("clean yard");
INSERT INTO todos (title) VALUES ("trash");
INSERT INTO todos (title) VALUES ("garden");
