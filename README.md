# BizDecipher / 商业解密

> AI 内容发布前风险审查平台 MVP

## 项目概述

BizDecipher 为跨境卖家、投放团队和代运营提供 AI 内容发布前风险审查，识别可能导致拒审、下架、投诉、侵权和虚假宣传的问题，并提供最低整改版本与留痕报告。

## 技术栈

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI API (Responses API)
- **Database**: Supabase (可选)
- **Deployment**: Vercel

## 项目结构

```
bizdecipher/
├── app/
│   ├── api/
│   │   ├── chat/route.ts    # AI 聊天 API
│   │   └── lead/route.ts   # 线索提交 API
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PainPoints.tsx
│   ├── SolutionSteps.tsx
│   ├── RiskTypes.tsx
│   ├── SampleReport.tsx
│   ├── ChatWidget.tsx
│   ├── Pricing.tsx
│   ├── LeadForm.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── lib/
│   ├── prompts.ts           # AI 系统提示词
│   ├── supabase.ts         # Supabase 客户端
│   └── validators.ts     # 表单验证
├── types/index.ts
├── .env.example
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 本地运行

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

```bash
cp .env.example .env.local
# 编辑 .env.local，填入：
# OPENAI_API_KEY=sk-...
# NEXT_PUBLIC_SUPABASE_URL=...    # 可选
# NEXT_PUBLIC_SUPABASE_ANON_KEY=... # 可选
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 4. Supabase 表结构（如需启用数据库）

```sql
-- 在 Supabase SQL Editor 中执行：
CREATE TABLE IF NOT EXISTS leads (
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
  status text DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_platform ON leads(platform);

-- 开启 RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role can read leads" ON leads FOR SELECT USING (auth.role() = 'service_role');
```

## 部署到 Vercel

### 1. Push 到 GitHub

```bash
git init
git add .
git commit -m "init bizdecipher mvp"
git remote add origin https://github.com/YOUR_USER/bizdecipher.git
git push -u origin main
```

### 2. Vercel 部署

- 访问 https://vercel.com/new
- 导入 GitHub 仓库
- 在 Vercel 环境变量中添加：
  - `OPENAI_API_KEY`
  - `NEXT_PUBLIC_SUPABASE_URL`（可选）
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`（可选）
  - `SUPABASE_SERVICE_ROLE_KEY`（可选）
- Deploy

### 3. 绑定域名

在 Vercel Dashboard → 项目 → Settings → Domains：
- 添加 `bizdecipher.com`
- Vercel 会显示需要配置的 DNS 记录

在 Cloudflare DNS 中添加（按 Vercel 提示）：
- A 记录：`@` → Vercel IP
- CNAME：`www` → `cname.vercel-dns.com`

**注意**：前期建议 DNS-only，不做橙色云代理（Proxy），避免影响 Vercel 安全流量可见性。

## 功能说明

| 功能 | 状态 | 说明 |
|---|---|---|
| 落地页 | ✅ | 完整 11 个模块 |
| AI 初筛聊天 | ✅ | 调用 OpenAI API |
| 正式审查表单 | ✅ | 调用 /api/lead |
| Supabase 存储 | ⚠️ | 可选，需配置环境变量 |
| 支付系统 | ❌ | v1 不做 |
| 审核员后台 | ❌ | v2 计划 |

## 环境变量说明

| 变量 | 必填 | 说明 |
|---|---|---|
| `OPENAI_API_KEY` | ✅ | OpenAI API Key |
| `NEXT_PUBLIC_SUPABASE_URL` | ❌ | Supabase 项目 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ❌ | Supabase Anon Key |
| `SUPABASE_SERVICE_ROLE_KEY` | ❌ | Supabase Service Key（服务端） |
| `RESEND_API_KEY` | ❌ | 邮件通知（v2） |
| `ADMIN_EMAIL` | ❌ | 管理员邮箱（v2） |

## 下一步

- [ ] 配置 OPENAI_API_KEY 并测试 AI 初筛
- [ ] 配置 Supabase 并启用线索存储
- [ ] 部署到 Vercel 并绑定域名
- [ ] 创建微信公众号自动回复引导
- [ ] 添加飞书/邮件 webhook 通知
- [ ] 实现审核员查看后台