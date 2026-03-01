-- ═══════════════════════════════════════════════════════════════════════════
-- AgencyFlow — Fix: RLS INSERT error ("new row violates row-level security")
-- ═══════════════════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE plpgsql
VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.usuarios
    WHERE email = auth.jwt()->>'email'
      AND nivel = 'Admin'
      AND ativo = true
  );
END;
$$;
