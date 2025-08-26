"use client";

import Link from "next/link";
import { Activity, Target, Users, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../src/shared/ui/language-switcher";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-black via-green-900 to-green-800">
      {/* Language Switcher - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <div className="max-w-4xl w-full space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
            <Activity className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            {t("home.title")}
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            {t("home.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl shadow-lg border border-green-500/20">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {t("home.features.goals.title")}
            </h3>
            <p className="text-green-100">
              {t("home.features.goals.description")}
            </p>
          </div>

          <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl shadow-lg border border-green-500/20">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {t("home.features.analytics.title")}
            </h3>
            <p className="text-green-100">
              {t("home.features.analytics.description")}
            </p>
          </div>

          <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl shadow-lg border border-green-500/20">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {t("home.features.community.title")}
            </h3>
            <p className="text-green-100">
              {t("home.features.community.description")}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <Link
            href="/auth/signin"
            className="inline-flex items-center justify-center w-full max-w-xs py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
          >
            {t("home.cta.startTraining")}
          </Link>
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center w-full max-w-xs py-4 px-6 border border-green-400/30 rounded-xl shadow-md text-lg font-medium text-green-400 bg-black/20 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 backdrop-blur-sm"
          >
            {t("home.cta.createAccount")}
          </Link>
        </div>
      </div>
    </div>
  );
}
