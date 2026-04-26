-- =============================================
-- BizDecipher / Supabase 初始化 SQL
-- 在 Supabase SQL Editor 中执行
-- =============================================

-- 创建 leads 表
CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  wechat text NOT NULL,
  email text,
  platform text NOT NULL,
  content_type text NOT NULL,
  category text NOT NULL,
  market text NOT NULL,
  content text NOT NULL,
  landing_page text,
  rejected boolean DEFAULT false,
  rejection_note text,
  urgent boolean DEFAULT false,
  note text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'paid', 'delivered', 'closed'))
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_platform ON public.leads(platform);
CREATE INDEX IF NOT EXISTS idx_leads_urgent ON public.leads(urgent) WHERE urgent = true;

-- 开启 RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 任何人可以插入（前端提交）
CREATE POLICY "Anyone can insert leads" ON public.leads
  FOR INSERT WITH CHECK (true);

-- Service role 可读写（服务端）
CREATE POLICY "Service role can read all leads" ON public.leads
  FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Service role can update leads" ON public.leads
  FOR UPDATE USING (auth.role() = 'service_role');

-- =============================================
-- 辅助视图
-- =============================================

CREATE OR REPLACE VIEW public.leads_summary AS
SELECT
  date_trunc('day', created_at) as day,
  count(*) as total_leads,
  count(*) FILTER (WHERE urgent = true) as urgent_leads,
  count(*) FILTER (WHERE rejected = true) as rejected_leads,
  count(*) FILTER (WHERE status = 'new') as new_leads,
  count(*) FILTER (WHERE status = 'paid') as paid_leads
FROM public.leads
GROUP BY date_trunc('day', created_at)
ORDER BY day DESC;

-- =============================================
-- 示例查询
-- =============================================

-- 查看所有新线索
-- SELECT * FROM public.leads WHERE status = 'new' ORDER BY created_at DESC;

-- 查看紧急线索
-- SELECT * FROM public.leads WHERE urgent = true AND status = 'new';

-- 按平台统计
-- SELECT platform, count(*) FROM public.leads GROUP BY platform;